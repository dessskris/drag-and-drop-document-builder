import Title from './components/Title';
import Author from './components/Author';
import DateComponent from './components/Date';
import TextBlock from './components/TextBlock';

export const widgets = {
  'title': { id: 'title', component: <Title />, content: 'Title' },
  'author': { id: 'author', component: <Author />, content: 'Author' },
  'date': { id: 'date', component: <DateComponent />, content: 'Date' },
  'textBlock': { id: 'textBlock', component: <TextBlock />, content: 'Text Block' },
};

export const widgetsEntries = ['title', 'author', 'date', 'textBlock'];

export const initialDocumentEntries = [];

export const droppables = {
  'widgets': {
    id: 'widgets',
    title: 'Widgets',
  },
  'document': {
    id: 'document',
    title: 'Document',
  },
};
