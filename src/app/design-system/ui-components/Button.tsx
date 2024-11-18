"use client";

type Props = {
  color: string;
  title: string;
  size: string;
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
};

export default function Button({
  color,
  title,
  size,
  disabled,
  loading,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`bg-${color} w-${size}`}
      onClick={onClick}
    >
      {loading ? <h1>Loading...</h1> : `${title}`}
    </button>
  );
}
