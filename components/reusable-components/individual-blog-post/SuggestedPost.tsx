import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './suggestedPost.module.scss';

interface SuggestedPostProps {
  id?: number;
  imageURL: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
}

const SuggestedPost = ({
  id,
  imageURL,
  title,
  description,
  date,
  readTime,
}: SuggestedPostProps) => {
  return (
    <div className={style.suggestedContent} key={id}>
      <div className={style.imageWrapper}>
        <Image src={imageURL} alt={title} height={185} width={412} className={style.imageStyle} />
      </div>
      <div className={style.textContainer}>
        <h4 className={style.cardTitle}>{title}</h4>
        <p className={style.cardDesc}>{description}</p>
        <div className={style.postInfo}>
          <p>
            {date} |{' '}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              transform="translate(0, 3)"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.5C8 3.36739 7.94732 3.24021 7.85355 3.14645C7.75979 3.05268 7.63261 3 7.5 3C7.36739 3 7.24021 3.05268 7.14645 3.14645C7.05268 3.24021 7 3.36739 7 3.5V9C7.00003 9.08813 7.02335 9.17469 7.06761 9.25091C7.11186 9.32712 7.17547 9.39029 7.252 9.434L10.752 11.434C10.8669 11.4961 11.0014 11.5108 11.127 11.4749C11.2525 11.4391 11.3591 11.3556 11.4238 11.2422C11.4886 11.1288 11.5065 10.9946 11.4736 10.8683C11.4408 10.7419 11.3598 10.6334 11.248 10.566L8 8.71V3.5Z"
                fill="#707A88"
              />
              <path
                d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                fill="#707A88"
              />
            </svg>{' '}
            {readTime} мин за читање
          </p>
        </div>
        <div className={style.postLink}>
          <Link href="www.google.com">Прочитај повеќе</Link>
        </div>
      </div>
    </div>
  );
};

export default SuggestedPost;
