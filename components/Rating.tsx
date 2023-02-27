import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
type RatingProps = {
  defaultValue?: number;
  onChange?: (value: number) => void;
};

export default function Rating({ defaultValue = 0, onChange }: RatingProps) {
  const [value, setValue] = useState(defaultValue);

  const handleStarClick = (newValue: number) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((val) => (
        <button
          key={val}
          onClick={() => handleStarClick(val)}
          className={`focus:outline-none ${
            val <= value
              ? 'text-yellow-500'
              : 'text-gray-400 hover:text-yellow-500'
          }`}
        >
          {val <= value ? (
            <StarIcon height={20} width={20} />
          ) : (
            <StarIcon height={20} width={20} />
          )}
        </button>
      ))}
    </div>
  );
}
