export default function CancelButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="bg-gray-500 hover:bg-gray-600 py-2 px-4 text-white rounded-md font-semibold"
        >
            { children}
        </button>
    )
}