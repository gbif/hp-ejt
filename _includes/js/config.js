var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});
const publisherKey = 'a064f300-1bc8-41ea-9364-b864ef4e8938';

var siteConfig = {
  routes: {
    alwaysUseHrefs: false,
    enabledRoutes: ['occurrenceSearch', 'datasetSearch', 'datasetKey'],
  },
  dataset: {
    rootFilter: {
      publishingOrg: publisherKey
    },
    excludedFilters: ['anyPublisherKey', 'datasetType', 'hostingOrganizationKey', 'networkKey', 'publishingCountryCode', 'license'],
    highlightedFilters: ['q']
  },
  occurrence: {
    excludedFilters: ['publisherKey', 'publishingCountryCode'],
    highlightedFilters: ['taxonKey', 'country', 'year', 'datasetKey'],
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 0
    },
    // all the columns that are available to the user. This array defines the order they appear in. By default all all column are available.
    availableTableColumns: ['features', 'country', 'stateProvince', 'locality', 'coordinates', 'year', 'eventDate', 'recordedBy', 'identifiedBy', 'recordNumber', 'catalogNumber', 'collectionCode', 'institutionCode', 'collection', 'dataset'],
    defaultTableColumns: ['features', 'country', 'coordinates', 'year', 'catalogNumber', 'dataset'], // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'equals', key: 'publishingOrg', value: publisherKey }, 
    occurrenceSearchTabs: ['MAP', 'TABLE', 'DATASETS', 'CLUSTERS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};
