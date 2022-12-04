/* All Ionic components */
import { IonAccordion } from "@ionic/core/components/ion-accordion";
import { IonAccordionGroup } from "@ionic/core/components/ion-accordion-group";
import { IonApp } from "@ionic/core/components/ion-app";
import { IonAvatar } from "@ionic/core/components/ion-avatar";
import { IonBackdrop } from "@ionic/core/components/ion-backdrop";
import { IonBackButton } from "@ionic/core/components/ion-back-button";
import { IonBadge } from "@ionic/core/components/ion-badge";
import { IonBreadcrumb } from "@ionic/core/components/ion-breadcrumb";
import { IonBreadcrumbs } from "@ionic/core/components/ion-breadcrumbs";
import { IonButton } from "@ionic/core/components/ion-button";
import { IonButtons } from "@ionic/core/components/ion-buttons";
import { IonCard } from "@ionic/core/components/ion-card";
import { IonCardContent } from "@ionic/core/components/ion-card-content";
import { IonCardHeader } from "@ionic/core/components/ion-card-header";
import { IonCardSubtitle } from "@ionic/core/components/ion-card-subtitle";
import { IonCardTitle } from "@ionic/core/components/ion-card-title";
import { IonCheckbox } from "@ionic/core/components/ion-checkbox";
import { IonChip } from "@ionic/core/components/ion-chip";
import { IonCol } from "@ionic/core/components/ion-col";
import { IonContent } from "@ionic/core/components/ion-content";
import { IonDatetime } from "@ionic/core/components/ion-datetime";
import { IonFab } from "@ionic/core/components/ion-fab";
import { IonFabButton } from "@ionic/core/components/ion-fab-button";
import { IonFabList } from "@ionic/core/components/ion-fab-list";
import { IonFooter } from "@ionic/core/components/ion-footer";
import { IonGrid } from "@ionic/core/components/ion-grid";
import { IonHeader } from "@ionic/core/components/ion-header";
import { IonIcon } from "@ionic/core/components/ion-icon";
import { IonImg } from "@ionic/core/components/ion-img";
import { IonInfiniteScroll } from "@ionic/core/components/ion-infinite-scroll";
import { IonInfiniteScrollContent } from "@ionic/core/components/ion-infinite-scroll-content";
import { IonInput } from "@ionic/core/components/ion-input";
import { IonItem } from "@ionic/core/components/ion-item";
import { IonItemDivider } from "@ionic/core/components/ion-item-divider";
import { IonItemGroup } from "@ionic/core/components/ion-item-group";
import { IonItemOption } from "@ionic/core/components/ion-item-option";
import { IonItemOptions } from "@ionic/core/components/ion-item-options";
import { IonItemSliding } from "@ionic/core/components/ion-item-sliding";
import { IonLabel } from "@ionic/core/components/ion-label";
import { IonList } from "@ionic/core/components/ion-list";
import { IonListHeader } from "@ionic/core/components/ion-list-header";
import { IonMenu } from "@ionic/core/components/ion-menu";
import { IonMenuButton } from "@ionic/core/components/ion-menu-button";
import { IonMenuToggle } from "@ionic/core/components/ion-menu-toggle";
import { IonNav } from "@ionic/core/components/ion-nav";
import { IonNavLink } from "@ionic/core/components/ion-nav-link";
import { IonNote } from "@ionic/core/components/ion-note";
import { IonProgressBar } from "@ionic/core/components/ion-progress-bar";
import { IonRadio } from "@ionic/core/components/ion-radio";
import { IonRadioGroup } from "@ionic/core/components/ion-radio-group";
import { IonRange } from "@ionic/core/components/ion-range";
import { IonRefresher } from "@ionic/core/components/ion-refresher";
import { IonRefresherContent } from "@ionic/core/components/ion-refresher-content";
import { IonReorder } from "@ionic/core/components/ion-reorder";
import { IonReorderGroup } from "@ionic/core/components/ion-reorder-group";
import { IonRippleEffect } from "@ionic/core/components/ion-ripple-effect";
import { IonRow } from "@ionic/core/components/ion-row";
import { IonSearchbar } from "@ionic/core/components/ion-searchbar";
import { IonSegment } from "@ionic/core/components/ion-segment";
import { IonSegmentButton } from "@ionic/core/components/ion-segment-button";
import { IonSelect } from "@ionic/core/components/ion-select";
import { IonSelectOption } from "@ionic/core/components/ion-select-option";
import { IonSkeletonText } from "@ionic/core/components/ion-skeleton-text";
import { IonSlide } from "@ionic/core/components/ion-slide";
import { IonSlides } from "@ionic/core/components/ion-slides";
import { IonSpinner } from "@ionic/core/components/ion-spinner";
import { IonSplitPane } from "@ionic/core/components/ion-split-pane";
import { IonTab } from "@ionic/core/components/ion-tab";
import { IonTabs } from "@ionic/core/components/ion-tabs";
import { IonTabBar } from "@ionic/core/components/ion-tab-bar";
import { IonTabButton } from "@ionic/core/components/ion-tab-button";
import { IonText } from "@ionic/core/components/ion-text";
import { IonTextarea } from "@ionic/core/components/ion-textarea";
import { IonThumbnail } from "@ionic/core/components/ion-thumbnail";
import { IonTitle } from "@ionic/core/components/ion-title";
import { IonToggle } from "@ionic/core/components/ion-toggle";
import { IonToolbar } from "@ionic/core/components/ion-toolbar";
import { IonVirtualScroll } from "@ionic/core/components/ion-virtual-scroll";

import { IonActionSheet } from "@ionic/core/components/ion-action-sheet";
import { IonAlert } from "@ionic/core/components/ion-alert";
import { IonLoading } from "@ionic/core/components/ion-loading";
import { IonModal } from "@ionic/core/components/ion-modal";
import { IonPicker } from "@ionic/core/components/ion-picker";
import { IonPickerColumn } from "@ionic/core/components/ion-picker-column";
import { IonPickerColumnInternal } from "@ionic/core/components/ion-picker-column-internal";
import { IonPickerInternal } from "@ionic/core/components/ion-picker-internal";
import { IonPopover } from "@ionic/core/components/ion-popover";
import { IonSelectPopover } from "@ionic/core/components/ion-select-popover";
import { IonToast } from "@ionic/core/components/ion-toast";

// taken from Vue implementation of ionic
export const defineComponent = (tagName: string, customElement: any) => {
  if (typeof customElements === "undefined") return;

  if (!customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};



export const defineIonComponents = () => {

  defineComponent("ion-accordion", IonAccordion);
  defineComponent("ion-accordion-group", IonAccordionGroup);
  defineComponent("ion-app", IonApp);
  defineComponent("ion-avatar", IonAvatar);
  defineComponent("ion-backdrop", IonBackdrop);
  defineComponent("ion-back-button", IonBackButton);
  defineComponent("ion-badge", IonBadge);
  defineComponent("ion-breadcrumb", IonBreadcrumb);
  defineComponent("ion-breadcrumbs", IonBreadcrumbs);
  defineComponent("ion-button", IonButton);
  defineComponent("ion-buttons", IonButtons);
  defineComponent("ion-card", IonCard);
  defineComponent("ion-card-content", IonCardContent);
  defineComponent("ion-card-header", IonCardHeader);
  defineComponent("ion-card-subtitle", IonCardSubtitle);
  defineComponent("ion-card-title", IonCardTitle);
  defineComponent("ion-checkbox", IonCheckbox);
  defineComponent("ion-chip", IonChip);
  defineComponent("ion-col", IonCol);
  defineComponent("ion-content", IonContent);
  defineComponent("ion-datetime", IonDatetime);
  defineComponent("ion-fab", IonFab);
  defineComponent("ion-fab-button", IonFabButton);
  defineComponent("ion-fab-list", IonFabList);
  defineComponent("ion-footer", IonFooter);
  defineComponent("ion-grid", IonGrid);
  defineComponent("ion-header", IonHeader);
  defineComponent("ion-icon", IonIcon);
  defineComponent("ion-img", IonImg);
  defineComponent("ion-infinite-scroll", IonInfiniteScroll);
  defineComponent("ion-infinite-scroll-content", IonInfiniteScrollContent);
  defineComponent("ion-input", IonInput);
  defineComponent("ion-item", IonItem);
  defineComponent("ion-item-divider", IonItemDivider);
  defineComponent("ion-item-group", IonItemGroup);
  defineComponent("ion-item-option", IonItemOption);
  defineComponent("ion-item-options", IonItemOptions);
  defineComponent("ion-item-sliding", IonItemSliding);
  defineComponent("ion-label", IonLabel);
  defineComponent("ion-list", IonList);
  defineComponent("ion-list-header", IonListHeader);
  defineComponent("ion-menu", IonMenu);
  defineComponent("ion-menu-button", IonMenuButton);
  defineComponent("ion-menu-toggle", IonMenuToggle);
  defineComponent("ion-nav", IonNav);
  defineComponent("ion-nav-link", IonNavLink);
  defineComponent("ion-note", IonNote);
  defineComponent("ion-progress-bar", IonProgressBar);
  defineComponent("ion-popover", IonPopover);
  defineComponent("ion-radio", IonRadio);
  defineComponent("ion-radio-group", IonRadioGroup);
  defineComponent("ion-range", IonRange);
  defineComponent("ion-refresher", IonRefresher);
  defineComponent("ion-refresher-content", IonRefresherContent);
  defineComponent("ion-reorder", IonReorder);
  defineComponent("ion-reorder-group", IonReorderGroup);
  defineComponent("ion-ripple-effect", IonRippleEffect);
  defineComponent("ion-row", IonRow);
  defineComponent("ion-searchbar", IonSearchbar);
  defineComponent("ion-segment", IonSegment);
  defineComponent("ion-segment-button", IonSegmentButton);
  defineComponent("ion-select", IonSelect);
  defineComponent("ion-select-option", IonSelectOption);
  defineComponent("ion-select-popover", IonSelectPopover);
  defineComponent("ion-skeleton-text", IonSkeletonText);
  defineComponent("ion-slide", IonSlide);
  defineComponent("ion-slides", IonSlides);
  defineComponent("ion-spinner", IonSpinner);
  defineComponent("ion-split-pane", IonSplitPane);
  defineComponent("ion-tab", IonTab);
  defineComponent("ion-tabs", IonTabs);
  defineComponent("ion-tab-bar", IonTabBar);
  defineComponent("ion-tab-button", IonTabButton);

  defineComponent("ion-text", IonText);
  defineComponent("ion-textarea", IonTextarea);
  defineComponent("ion-thumbnail", IonThumbnail);
  defineComponent("ion-title", IonTitle);
  defineComponent("ion-toggle", IonToggle);
  defineComponent("ion-toolbar", IonToolbar);
  defineComponent("ion-virtual-scroll", IonVirtualScroll);

  defineComponent("ion-action-sheet", IonActionSheet);
  defineComponent("ion-alert", IonAlert);
  defineComponent("ion-loading", IonLoading);
  defineComponent("ion-modal", IonModal);
  defineComponent("ion-picker", IonPicker);
  defineComponent("ion-picker-column", IonPickerColumn);
  defineComponent("ion-picker-column-internal", IonPickerColumnInternal);
  defineComponent("ion-picker-internal", IonPickerInternal);

  defineComponent("ion-toast", IonToast);

  // Maybe do this - https://github.com/ionic-team/ionic-framework/blob/223f36f6adacf8adce47cee4809a60c94a9e0efa/packages/vue/src/controllers.ts
  // https://github.com/ionic-team/ionic-framework/blob/5bb1414f7fa04ea07954cb3f68883ee2f162586a/packages/react/src/components/proxies.ts
};


/*
For later use possibly, dynamic imports... which delays the styling, so creates FUOC when used


  const { IonAccordion } = await import("@ionic/core/components/ion-accordion");
  const { IonAccordionGroup } = await import("@ionic/core/components/ion-accordion-group");
  const { IonApp } = await import("@ionic/core/components/ion-app");
  const { IonAvatar } = await import("@ionic/core/components/ion-avatar");
  const { IonBackdrop } = await import("@ionic/core/components/ion-backdrop");
  const { IonBackButton } = await import("@ionic/core/components/ion-back-button");
  const { IonBadge } = await import("@ionic/core/components/ion-badge");
  const { IonBreadcrumb } = await import("@ionic/core/components/ion-breadcrumb");
  const { IonBreadcrumbs } = await import("@ionic/core/components/ion-breadcrumbs");
  const { IonButton } = await import("@ionic/core/components/ion-button");
  const { IonButtons } = await import("@ionic/core/components/ion-buttons");
  const { IonCard } = await import("@ionic/core/components/ion-card");
  const { IonCardContent } = await import("@ionic/core/components/ion-card-content");
  const { IonCardHeader } = await import("@ionic/core/components/ion-card-header");
  const { IonCardSubtitle } = await import("@ionic/core/components/ion-card-subtitle");
  const { IonCardTitle } = await import("@ionic/core/components/ion-card-title");
  const { IonCheckbox } = await import("@ionic/core/components/ion-checkbox");
  const { IonChip } = await import("@ionic/core/components/ion-chip");
  const { IonCol } = await import("@ionic/core/components/ion-col");
  const { IonContent } = await import("@ionic/core/components/ion-content");
  const { IonDatetime } = await import("@ionic/core/components/ion-datetime");
  const { IonFab } = await import("@ionic/core/components/ion-fab");
  const { IonFabButton } = await import("@ionic/core/components/ion-fab-button");
  const { IonFabList } = await import("@ionic/core/components/ion-fab-list");
  const { IonFooter } = await import("@ionic/core/components/ion-footer");
  const { IonGrid } = await import("@ionic/core/components/ion-grid");
  const { IonHeader } = await import("@ionic/core/components/ion-header");
  const { IonIcon } = await import("@ionic/core/components/ion-icon");
  const { IonImg } = await import("@ionic/core/components/ion-img");
  const { IonInfiniteScroll } = await import("@ionic/core/components/ion-infinite-scroll");
  const { IonInfiniteScrollContent } = await import("@ionic/core/components/ion-infinite-scroll-content");
  const { IonInput } = await import("@ionic/core/components/ion-input");
  const { IonItem } = await import("@ionic/core/components/ion-item");
  const { IonItemDivider } = await import("@ionic/core/components/ion-item-divider");
  const { IonItemGroup } = await import("@ionic/core/components/ion-item-group");
  const { IonItemOption } = await import("@ionic/core/components/ion-item-option");
  const { IonItemOptions } = await import("@ionic/core/components/ion-item-options");
  const { IonItemSliding } = await import("@ionic/core/components/ion-item-sliding");
  const { IonLabel } = await import("@ionic/core/components/ion-label");
  const { IonList } = await import("@ionic/core/components/ion-list");
  const { IonListHeader } = await import("@ionic/core/components/ion-list-header");
  const { IonMenu } = await import("@ionic/core/components/ion-menu");
  const { IonMenuButton } = await import("@ionic/core/components/ion-menu-button");
  const { IonMenuToggle } = await import("@ionic/core/components/ion-menu-toggle");
  const { IonNav } = await import("@ionic/core/components/ion-nav");
  const { IonNavLink } = await import("@ionic/core/components/ion-nav-link");
  const { IonNote } = await import("@ionic/core/components/ion-note");
  const { IonProgressBar } = await import("@ionic/core/components/ion-progress-bar");
  const { IonRadio } = await import("@ionic/core/components/ion-radio");
  const { IonRadioGroup } = await import("@ionic/core/components/ion-radio-group");
  const { IonRange } = await import("@ionic/core/components/ion-range");
  const { IonRefresher } = await import("@ionic/core/components/ion-refresher");
  const { IonRefresherContent } = await import("@ionic/core/components/ion-refresher-content");
  const { IonReorder } = await import("@ionic/core/components/ion-reorder");
  const { IonReorderGroup } = await import("@ionic/core/components/ion-reorder-group");
  const { IonRippleEffect } = await import("@ionic/core/components/ion-ripple-effect");
  const { IonRow } = await import("@ionic/core/components/ion-row");
  const { IonSearchbar } = await import("@ionic/core/components/ion-searchbar");
  const { IonSegment } = await import("@ionic/core/components/ion-segment");
  const { IonSegmentButton } = await import("@ionic/core/components/ion-segment-button");
  const { IonSelect } = await import("@ionic/core/components/ion-select");
  const { IonSelectOption } = await import("@ionic/core/components/ion-select-option");
  const { IonSkeletonText } = await import("@ionic/core/components/ion-skeleton-text");
  const { IonSlide } = await import("@ionic/core/components/ion-slide");
  const { IonSlides } = await import("@ionic/core/components/ion-slides");
  const { IonSpinner } = await import("@ionic/core/components/ion-spinner");
  const { IonSplitPane } = await import("@ionic/core/components/ion-split-pane");
  const { IonTab } = await import("@ionic/core/components/ion-tab");
  const { IonTabs } = await import("@ionic/core/components/ion-tabs");
  const { IonTabBar } = await import("@ionic/core/components/ion-tab-bar");
  const { IonTabButton } = await import("@ionic/core/components/ion-tab-button");
  const { IonText } = await import("@ionic/core/components/ion-text");
  const { IonTextarea } = await import("@ionic/core/components/ion-textarea");
  const { IonThumbnail } = await import("@ionic/core/components/ion-thumbnail");
  const { IonTitle } = await import("@ionic/core/components/ion-title");
  const { IonToggle } = await import("@ionic/core/components/ion-toggle");
  const { IonToolbar } = await import("@ionic/core/components/ion-toolbar");
  const { IonVirtualScroll } = await import("@ionic/core/components/ion-virtual-scroll");

  const { IonActionSheet } = await import("@ionic/core/components/ion-action-sheet");
  const { IonAlert } = await import("@ionic/core/components/ion-alert");
  const { IonLoading } = await import("@ionic/core/components/ion-loading");
  const { IonModal } = await import("@ionic/core/components/ion-modal");
  const { IonPicker } = await import("@ionic/core/components/ion-picker");
  const { IonPickerColumn } = await import("@ionic/core/components/ion-picker-column");
  const { IonPickerColumnInternal } = await import("@ionic/core/components/ion-picker-column-internal");
  const { IonPickerInternal } = await import("@ionic/core/components/ion-picker-internal");
  const { IonPopover } = await import("@ionic/core/components/ion-popover");
  const { IonSelectPopover } = await import("@ionic/core/components/ion-select-popover");
  const { IonToast } = await import("@ionic/core/components/ion-toast");




*/