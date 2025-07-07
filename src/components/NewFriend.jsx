import { CheckCircleIcon, MapPinIcon, UserPlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getLanguageFlag } from './FriendCard'
import { capitialize } from '../lib/utils'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getOngoingFriendReqs, sendFriendRequest } from '../lib/api'

const NewFriend = ({ user }) => {
	const [outgoingFriendReqs, setOutgoingFriendReqs] = useState(new Set())
	const queryClient = useQueryClient()

	const { mutate: sendFriendRequestMutation, isPending } = useMutation({
		mutationFn: sendFriendRequest,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['outgoingFriendRequests'] })
		},
		retry: false,
	})

	const { data: outgoingFriendRequests } = useQuery({
		queryKey: ['outgoingFriendRequests'],
		queryFn: getOngoingFriendReqs,
		retry: false,
	})

	useEffect(() => {
		const ongoingRequests = new Set() 

		outgoingFriendRequests?.forEach(req => {
			ongoingRequests.add(req.recipient.id)
		})
		setOutgoingFriendReqs(ongoingRequests)
	}, [outgoingFriendRequests])

	const hasRequestBeenSent = outgoingFriendReqs.has(user.id) 

	return (
		<div key={user._id} className='card bg-base-200 hover:shadow-lg transition-all duration-300'>
			<div className='card-body p-5 space-y-4'>
				<div className='flex items-center gap-3'>
					<div className='avatar size-16 rounded-full'>
						<img src={user.profilePic} alt={user.fullName} />
					</div>

					<div>
						<h3 className='font-semibold text-lg'>{user.fullName}</h3>
						{user.location && (
							<div className='flex items-center text-xs opacity-70 mt-1'>
								<MapPinIcon className='size-3 mr-1' />
								{user.location}
							</div>
						)}
					</div>
				</div>

				{/* Languages with flags */}
				<div className='flex flex-wrap gap-1.5'>
					<span className='badge badge-secondary'>
						{getLanguageFlag(user.nativeLanguage)}
						Native: {capitialize(user.nativeLanguage)}
					</span>
					<span className='badge badge-outline'>
						{getLanguageFlag(user.learningLanguage)}
						Learning: {capitialize(user.learningLanguage)}
					</span>
				</div>

				{user.bio && <p className='text-sm opacity-70'>{user.bio}</p>}

				{/* Action button */}
				<button
					className={`btn w-full mt-2 ${hasRequestBeenSent ? 'btn-disabled' : 'btn-primary'} `}
					onClick={() => sendFriendRequestMutation(user.id)}
					disabled={hasRequestBeenSent || isPending}
				>
					{hasRequestBeenSent ? (
						<>
							<CheckCircleIcon className='size-4 mr-2' />
							Request Sent
						</>
					) : (
						<>
							<UserPlusIcon className='size-4 mr-2' />
							Send Friend Request
						</>
					)}
				</button>
			</div>
		</div>
	)
}

export default NewFriend
