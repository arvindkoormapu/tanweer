import { useState, useEffect } from 'react';

const usePageContent = (page) => {
  const [contentText, setContentText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching: ${window.location.origin}/content/${page}.json`);
    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${window.location.origin}/content/${page}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Fetched content:', data);
        setContentText(data);
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchContent();
  }, [page]);

  return { contentText, loading, error };
};

export default usePageContent;
