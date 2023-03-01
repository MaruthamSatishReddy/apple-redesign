import { useRouter } from 'next/router';
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
function BackButton() {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <button onClick={handleClick}>
      <ArrowLeftIcon height={20} width={20} />
    </button>
  );
}
export default BackButton;
