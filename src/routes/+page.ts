import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		posts: [
			{
        link: 'https://next-blogs-app.vercel.app/',
				title: 'Posthub',
				content:
					'A webapp with features to create, share your posts. You can also add to a post anyone to work with him as a collaborator.',
				imagePath: '/posthub.png'
			},
			{
        link: 'https://textextractor-xi.vercel.app/',
				title: 'Textextractor',
				content:
					'An application based on tesseract that lets you extract text from your image on any language.',
				imagePath: '/textextractor.png'
			}
		]
	};
}) satisfies PageLoad;
