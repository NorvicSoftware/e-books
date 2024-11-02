
import { Link } from "@inertiajs/react";
export default function LinkButton({ className, children, ...props }) {
    return (
        <Link
            {...props}
            className={"py-2 px-4 text-white rounded-md font-semibold " + className}>
            {children}
        </Link>
    )
}