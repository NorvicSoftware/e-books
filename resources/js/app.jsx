import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './Pages/CartContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const initialOptions = {
    clientId: "AVX7kxUiT8UvU69ADJWZV67t7Nx4JSqWouCA5DwY8azCuBCf103Re5fSSrtDdzqfUeyJZsJPWHz1pZzH",
    currency: "USD",
    intent: "capture",
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PayPalScriptProvider options={initialOptions}>
                <CartProvider>
                    <App {...props} />
                </CartProvider>
            </PayPalScriptProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
