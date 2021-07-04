import * as React from 'react';
import { window } from 'browser-monads';
import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title: string;
  description: string;
  ogImage?: {
    url: string;
    width: number;
    height: number;
  };
  twitterCardType?: string;
  twitterUsername?: string;
}

const SEO = ({
  title,
  ogImage,
  description,
  twitterCardType,
  twitterUsername,
  ...props
}: SEOProps): JSX.Element | null => {
  // Prevent errors if no metadata was set
  if (!title || !description) return null;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        // Title and description are mandatory
        title: title,
        description: description,
        url: window.location.href,
        // Only include OG image if we have it
        ...(ogImage && {
          images: [
            {
              url: ogImage.url,
              width: ogImage.width,
              height: ogImage.height,
              alt: title,
            },
          ],
        }),
      }}
      // Only included Twitter data if we have it
      twitter={{
        site: '@adictic_app',
        cardType: 'summary_large_image',
        handle: '@adictic_app',
        ...(twitterCardType && { cardType: twitterCardType }),
        ...(twitterUsername && { cardType: twitterUsername }),
      }}
      additionalMetaTags={[
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content:
            ogImage?.url ||
            'https://adictic.com/static/media/Adictic.5f90d080.svg',
        },
        {
          name: 'twitter:image:alt',
          content: title,
        },
      ]}
      canonical="https://adictic.com"
      {...props}
    />
  );
};

export default SEO;
