'use client'
import Spinner from './Spinner'

type ButtonProps = {
  label: string
  loading: boolean
  onClick?: () => void
  className?: string
}

const CustomBtn = ({ label, loading, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={loading}
      className={`${
        className
          ? className
          : 'hover:bg-[var(--customDark)] text-black bg-[var(--custom)]'
      } w-full px-4 font-medium py-2 rounded-full transition ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      style={{ width: '100%' }}
    >
      {loading ? <Spinner size={30} /> : <div>{label}</div>}
    </button>
  )
}

export default CustomBtn
