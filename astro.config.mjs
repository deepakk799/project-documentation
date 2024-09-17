import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://deepakk799.github.io',
	base: '/',
    integrations: [starlight({
        plugins: [
            // Generate the OpenAPI documentation pages.
            starlightOpenAPI([
                {
                    base: 'storefront/api/address-check',
                    label: 'Address Check',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=address-check'
                },
				{
                    base: 'storefront/api/auth',
                    label: 'Authentication',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=auth'
                },
				{
                    base: 'storefront/api/basket',
                    label: 'Baskets',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=basket_v100'
                },
				{
                    base: 'storefront/api/customer',
                    label: 'Customers',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=customer'
                },
				{
                    base: 'storefront/api/user-login',
                    label: 'Custom user login',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=userLogin'
                },
				{
                    base: 'storefront/api/newsletter-subscription',
                    label: 'Newsletter Subscription',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=newsletter-subscription'
                },
				{
                    base: 'storefront/api/orders',
                    label: 'Orders',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=order_v100'
                },
				{
                    base: 'storefront/api/pricing',
                    label: 'Pricing',
                    schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=pricing_v1'
                },
				// {
				// 	base: 'storefront/api/products',
				// 	label: 'Products',
				// 	schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=product'
				// },
				{
					base: 'storefront/api/promotion',
					label: 'Promotions',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=promotion'
				},
				{
					base: 'storefront/api/quoting',
					label: 'Quoting',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=quoting'
				},
				{
					base: 'storefront/api/ratings',
					label: 'Ratings',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=rating-review'
				},
				{
					base: 'storefront/api/recommendation',
					label: 'Recommendation',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=recommendation'
				},
				{
					base: 'storefront/api/shop',
					label: 'Shop',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=shop'
				},
				{
					base: 'storefront/api/wishlist',
					label: 'Wishlist',
					schema: 'https://stage.shop.lifesciences.danaher.com/INTERSHOP/rest/WFS/SMC/-/swagger/DANAHERLS-LSIG-Site/-/oapi.yaml?apiID=wishlist'
				},
				// {
				// 	base: 'inriver/api',
				// 	label: 'InRiver',
				// 	schema: 'https://apiuse.productmarketingcloud.com/swagger/v1/swagger.json'
				// }
            ]),
        ],
        title: 'e-Commerce Docs',
		logo: {
			dark: './src/assets/logo.png',
			light: './src/assets/danaher-logo.svg',
		},
		customCss: [
			// Path to your Tailwind base styles:
			'./src/tailwind.css',
		],
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
            {
                label: 'APIs',
                items: [
                    ...openAPISidebarGroups,
                ],
            },
        ],
		}), tailwind({
			// Disable the default base styles:
			applyBaseStyles: false,
		})],
});