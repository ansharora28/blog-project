import { useEffect } from 'react';

const CusdisCommentSection = ({ pageId, pageUrl, pageTitle }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cusdis.com/js/cusdis.es.js';
        script.async = true;
        script.setAttribute('data-host', 'https://cusdis.com');
        script.setAttribute('data-app-id', '5250856f-8513-4b8f-9fe3-759f5bcf54fc');
        script.setAttribute('data-page-id', pageId);
        script.setAttribute('data-page-url', pageUrl);
        script.setAttribute('data-page-title', pageTitle);
        document.getElementById('cusdis_thread').appendChild(script);
    }, [pageId, pageUrl, pageTitle]);

    return <div id="cusdis_thread"></div>;
};

export default CusdisCommentSection;
