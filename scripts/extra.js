module.exports = {
    'IonSplitPane': `const QUERY: { [key: string]: string } = {
        xs: '(min-width: 0px)',
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
        never: '',
      };`,

    'IonSearchbar': `
      import { config } from '@ionic/core'
      import { arrowBackSharp, closeCircle, closeSharp, searchOutline, searchSharp } from 'ionicons/icons';
      `
}