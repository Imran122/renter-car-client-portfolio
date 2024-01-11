import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const CarReviewCard = () => {
  return (
		<div className='review-card d-grid gap-3 border-bottom'>
			{/* review user details */}
			<div className='d-flex align-items-center'>
				{/* user thumbnail */}
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiGlASQN2aBayDa3IennhcpPOMJV8tyCcOw&usqp=CAU'
					className='rounded-circle img-fluid'
					width={60}
					height={60}
					alt='user profile'
				/>
				<div className='ms-2'>
					{/* host name and verification status */}
					<h5 className='fw-bold '>Kathryn Murphy</h5>
					<p style={{ color: '#475467' }} className='my-2'>
						Mar 30, 2021
					</p>
				</div>
			</div>
			{/* rating */}
			<div style={{ color: '#FFAD60' }}>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			{/* review body */}
			<div className='review-body'>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor
					do amet sint. Velit officia consequat duis enim velit
					mollit. Exercitation veniam consequat sunt nostrud amet.
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
					et.
				</p>
			</div>
		</div>
  );
}

export default CarReviewCard