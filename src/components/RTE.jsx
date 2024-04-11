import React from 'react'; // Importing React library for creating React components
import { Editor } from '@tinymce/tinymce-react'; // Importing Editor component from TinyMCE React package
import { Controller } from 'react-hook-form'; // Importing Controller component from react-hook-form package

// Defining a functional component named RTE (Rich Text Editor) which takes props: name, control, label, and defaultValue
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {/* Rendering label if provided */}
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      {/* Using Controller component from react-hook-form to integrate TinyMCE Editor with form control */}
      <Controller
        name={name || "content"} // Setting the name of the field, defaulting to "content" if not provided
        control={control} // Passing the control prop provided by react-hook-form for managing form state
        render={({ field: { onChange } }) => ( // Rendering the Editor component with access to the onChange function
          <Editor
            initialValue={defaultValue} // Setting the initial value of the editor
            init={{
              initialValue: defaultValue, // Setting the initial value again (duplicated)
              height: 500, // Setting the height of the editor
              menubar: true, // Showing the menubar in the editor
              plugins: [ // List of plugins to be included in the editor
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar: // Customizing the toolbar options for the editor
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }" // Customizing the content style of the editor
            }}
            onEditorChange={onChange} // Handling editor content change event by calling onChange function
          />
        )}
      />
    </div>
  );
}
