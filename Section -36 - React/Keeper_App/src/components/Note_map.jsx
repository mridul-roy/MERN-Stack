function Note_map(props) {
  return (
    <div>
      {props.notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          id={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}