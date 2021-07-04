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
        site: '@sebg96',
        cardType: 'app',
        handle: '@sebg96',
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
          content: ogImage?.url,
        },
        {
          name: 'twitter:image:alt',
          content: title,
        },
      ]}
      canonical="https://sebastiangarcia.dev"
      {...props}
    />
  );
};

export default SEO;
