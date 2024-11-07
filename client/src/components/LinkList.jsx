import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, fetchLinks, removeLink } from "../features/linksSlice";
import axios from "axios";

const styles = {
  container: {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Dynamic grid layout
    gap: "16px", // Space between the columns
  },
  listItem: {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    overflow: "hidden"
  },
  link: {
    cursor: "pointer",
    color: "#007BFF",
    textDecoration: "underline",
    transition: "color 0.3s, text-decoration 0.3s",
  },
  linkHover: {
    color: "#0056b3",
    textDecoration: "none",
  },
};

const LinkList = () => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.links);

  useEffect(() => {
    dispatch(fetchLinks()); // Fetch links on initial render
  }, [dispatch]);

  // Function to handle link deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/links/${id}`);
      dispatch(removeLink(id)); // Optimistic update (optional)
    } catch (error) {
      console.error("Failed to delete the link:", error);
    }
  };

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {links.map((link) => (
          <li key={link._id} style={styles.listItem}>
            <span
              onClick={() => {
                window.open(link.url, "_blank");
                handleDelete(link._id);
              }}
              style={styles.link}
            >
              {link.url}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
