import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import { widgets, widgetsEntries, initialDocumentEntries, droppables } from './constants';
import styles from './App.module.scss';
import Column from './components/Column/Column';
import Entry from './components/Entry/Entry';

const WIDGETS = 'widgets';
const DOCUMENT = 'document';

const App = () => {
  const [documentEntries, setDocumentEntries] = useState(initialDocumentEntries);

  /*
  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.widgets).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }
  */

  const onDragEnd = (result) => {
    //document.body.style.color = 'inherit';
    //document.body.style.backgroundColor = 'inherit';
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;
    if (destination.droppableId === WIDGETS) return;

    const start = droppables[source.droppableId] ;
    const finish = droppables[destination.droppableId];

    const newDocumentEntries = Array.from(documentEntries);
    if (start === finish) {
      // Dragging within the Document
      const movingEntry = newDocumentEntries[source.index];
      newDocumentEntries.splice(source.index, 1);
      newDocumentEntries.splice(destination.index, 0, movingEntry);
    } else {
      // Dragging from Widgets to Document
      newDocumentEntries.splice(destination.index, 0, { id: uuid(), type: draggableId });
    }
    setDocumentEntries(newDocumentEntries);
  };

  const deleteDocumentEntry = (index) => {
    const newDocumentEntries = Array.from(documentEntries);
    newDocumentEntries.splice(index, 1);
    setDocumentEntries(newDocumentEntries);
  };

  return (
    <DragDropContext
      //onDragStart={onDragStart}
      //onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className={styles.container}>
        <Column
          key={WIDGETS}
          className={styles.widgets}
          column={droppables[WIDGETS]}
          entries={widgetsEntries.map((entryId, index) =>
            <Entry key={entryId} id={entryId} content={widgets[entryId].label} index={index} />
          )}
          isDropDisabled={true}
        />
        <Column
          key={DOCUMENT}
          className={styles.document}
          column={droppables[DOCUMENT]}
          entries={documentEntries.map((entry, index) =>
            <Entry
              key={entry.id}
              id={entry.id}
              withDragHandle
              content={widgets[entry.type].component}
              index={index}
              onDeleteEntry={() => deleteDocumentEntry(index)}
            />
          )}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
