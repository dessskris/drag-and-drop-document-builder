import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EditableTable = () => {
  const editorRef = useRef(null);
  return (
    <Editor
      apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
      onInit={(_evt, editor) => editorRef.current = editor}
      initialValue={`
        <h2>Income and Expenditure</h2>
        <table style="border-collapse: collapse; width: 100%;" border="1">
          <thead>
            <tr>
              <th>Income</th>
              <th>Amount</th>
              <th>Expenditure</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salary</td>
              <td>£3,000.00</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Savings</td>
              <td>£500.00</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Additional income</td>
              <td>£200.00</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      `}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  );
}

export default EditableTable;
