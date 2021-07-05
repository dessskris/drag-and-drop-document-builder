import Title from './components/Title';
import Author from './components/Author';
import DateComponent from './components/Date';
import TextBlock from './components/TextBlock';
import Chart from './components/Chart';
import Table from './components/Table/Table';

export const widgets = {
  'title': { id: 'title', component: <Title />, label: 'Title' },
  'author': { id: 'author', component: <Author />, label: 'Author' },
  'date': { id: 'date', component: <DateComponent />, label: 'Date' },
  'textBlock': { id: 'textBlock', component: <TextBlock />, label: 'Text Block' },
  'chart': { id: 'chart', component: <Chart />, label: 'Chart' },
  'table': { id: 'table', component: <Table />, label: 'Table' },
};

export const widgetsEntries = ['title', 'author', 'date', 'textBlock', 'chart', 'table'];

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
