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
    overflow: "hidden",
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
      dispatch(fetchLinks())
    } catch (error) {
      console.error("Failed to delete the link:", error);
    }
  };

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {links.map((link) => (
          <li key={link._id} style={styles.listItem}>
            <a
              href={link.url}
              target="_self"
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                try {
                  // Remove only specific item if needed
                  localStorage.removeItem("goal");
                  // Set new value
                  localStorage.setItem("goal", link.url);
                  // Verify value was set
                  const storedValue = localStorage.getItem("goal");
                  if (storedValue === link.url) {
                    handleDelete(link._id);
                    window.location.href = link.url;
                  } else {
                    console.error("Failed to store URL in localStorage");
                  }
                } catch (error) {
                  console.error("localStorage error:", error);
                }}}
            >
              {link.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
