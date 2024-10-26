
export default function CreateButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white rounded-md font-semibold"
        >
            { children}
        </button>
    )
}