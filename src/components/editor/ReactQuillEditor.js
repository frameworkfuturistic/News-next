import React from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function ReactQuillEditor({ theme, className }) {
  // Your component logic here
  return (
    <div>
      {/* Ensure ReactQuill is rendered only on the client side */}
      {typeof window !== 'undefined' && <ReactQuill theme={theme} className={className} />}
      {/* Rest of your component */}
    </div>
  );
}

export default ReactQuillEditor;
