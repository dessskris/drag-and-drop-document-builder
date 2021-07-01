const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch TV' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'widgets': {
      id: 'widgets',
      title: 'Widgets',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'document': {
      id: 'document',
      title: 'Document',
      taskIds: [],
    },
  },
  columnOrder: ['widgets', 'document'],
};

export default initialData;
