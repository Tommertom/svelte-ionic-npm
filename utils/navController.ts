/*
    Wrapper for Ionic's Nav component. Only needed because we need an overlay for each nav component pushed to 
    the stack, which requires a bit of conversion.

    I believe in the angular/vue/react implementations this is done via some sort of framework delegated,
    which seems a bit more work compared to a navController - which actually used to be a v3 component
    to manage page stacks.
*/
import type { NavComponent, NavOptions, TransitionDoneFn, ViewController } from '@ionic/core';
import type { SvelteComponent } from 'svelte';

const getIonNav = (): HTMLIonNavElement | null => { return document.querySelector('ion-nav') as HTMLIonNavElement; };

const createHTMLCompFromSvelte = (
    component: new (...args: any) => SvelteComponent,
    componentProps: {}
) => {
    const divWrapper = document.createElement('div');
    const contentID = 'id' + Date.now();
    divWrapper.id = contentID;

    const navContent = document.createElement('div');

    divWrapper.appendChild(navContent);
    document.body.appendChild(divWrapper);

    const svelteComponent = new component({
        target: navContent,
        ...componentProps

    });

    return divWrapper;
};

export const navController = {
    canGoBack: (view?: ViewController) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.canGoBack(view)
    },

    getActive: () => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.getActive()
    },

    getByIndex: (index: number) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.getByIndex(index)
    },

    getPrevious: (view?: ViewController) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.getPrevious(view)
    },

    insert: (insertIndex: number, component: SvelteComponent, componentProps?: any, opts?: NavOptions, done?: TransitionDoneFn) => {
        const insertFn = getIonNav()?.insert;
        const componentToInsert = createHTMLCompFromSvelte(component as any, componentProps);
        if (insertFn !== undefined) return insertFn(insertIndex, componentToInsert as any, componentProps, opts as any, done)
    },

    /*
export interface NavComponentWithProps<T = any> {
  component: NavComponent;
  componentProps?: ComponentProps<T> | null;
}
    */
    insertPages: (insertIndex: number, insertComponents: NavComponent[], opts?: NavOptions, done?: TransitionDoneFn) => {
        console.error('navController - insertPages not implemented');
    },

    pop: (opts?: NavOptions | null | undefined, done?: TransitionDoneFn | undefined) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.pop(opts, done);
    },

    popTo: (indexOrViewCtrl: number | ViewController, opts?: NavOptions, done?: TransitionDoneFn) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.popTo(indexOrViewCtrl, opts, done);
    },

    popToRoot: (opts?: NavOptions, done?: TransitionDoneFn) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.popToRoot(opts, done);
    },

    push: (component: SvelteComponent, componentProps?: any, opts?: NavOptions, done?: TransitionDoneFn) => {
        const pushFn = getIonNav()?.push;
        const componentToInsert = createHTMLCompFromSvelte(component as any, componentProps);
        if (pushFn !== undefined) return pushFn(componentToInsert as any, componentProps, opts as any, done)
    },

    removeIndex: (startIndex: number, removeCount?: number, opts?: NavOptions, done?: TransitionDoneFn) => {
        const ionNav = getIonNav();
        if (ionNav !== null) return ionNav.removeIndex(startIndex, removeCount, opts, done);
    },

    setPages: (views: NavComponent[], opts?: NavOptions, done?: TransitionDoneFn) => {
        console.error('navController - setPages not implemented');
    },

    setRoot: (component: SvelteComponent, componentProps?: any, opts?: NavOptions, done?: TransitionDoneFn) => {
        const setRootFn = getIonNav()?.setRoot;
        const componentToInsert = createHTMLCompFromSvelte(component as any, componentProps);
        if (setRootFn !== undefined) return setRootFn(componentToInsert as any, componentProps, opts as any, done)
    }
};
