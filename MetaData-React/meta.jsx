"use client"
import React, { useEffect } from 'react';

const MetaDatas = ({ data }) => {
    useEffect(() => {
        if (window) {
            const setMetaTag = (name, content) => {
                let tag = document.head.querySelector(`meta[name="${name}"]`);
                if (!tag) {
                    tag = document.createElement('meta');
                    tag.setAttribute('name', name);
                    document.head.appendChild(tag);
                }
                tag.setAttribute('content', content);
            };

            const setPropertyTag = (property, content) => {
                let tag = document.head.querySelector(`meta[property="${property}"]`);
                if (!tag) {
                    tag = document.createElement('meta');
                    tag.setAttribute('property', property);
                    document.head.appendChild(tag);
                }
                tag.setAttribute('content', content);
            };

            document.title = data?.name || 'Default Title';

            // Common metadata
            setMetaTag('description', data?.description || 'Default Description');

            // Facebook metadata
            setPropertyTag('og:title', `${data?.name}`);
            setPropertyTag('og:description', data?.description);
            setPropertyTag('og:image', data?.images[0]);
            setPropertyTag('og:url', window.location.href);

            // Twitter metadata
            setMetaTag('twitter:title', `${data?.name}`);
            setMetaTag('twitter:description', data?.description);
            setMetaTag('twitter:image', data?.images[0]);
            setMetaTag('twitter:card', 'summary');

            // Instagram metadata (typically same as Open Graph)
            setPropertyTag('og:type', 'website');
        }
    }, [data]);

    return <>Hello</>;
};

export default MetaDatas;
