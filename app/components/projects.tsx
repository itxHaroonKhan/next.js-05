import styles from './Projects.module.css';
import axios from "axios";
import { useEffect, useState } from "react";

// Define types for the API response
interface ImageData {
  id: string;
  download_url: string;
  author: string;
}

export default function Projects() {
  const [Data, setData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=10");
      setData(response.data);
    } catch (err) {
      setError("Failed to load data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles['projects-container']} id="projects">
      <h2 className={styles['projects-heading']}>Projects</h2>

      {loading ? (
        <div className={styles['loading-text']}>Loading...</div>
      ) : error ? (
        <div className={styles['error-text']}>{error}</div>
      ) : (
        <div className={styles['projects-grid']}>
          {Data.map((elem) => (
            <div key={elem.id} className={styles['project-card']}>
              <img className={styles['project-image']} src={elem.download_url} alt={elem.author} />
              <p className={styles['project-author']}>{elem.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
