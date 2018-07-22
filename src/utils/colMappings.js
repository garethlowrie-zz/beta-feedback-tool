/** This file can be ignored for now... */
export const generateCtColumnMappings = email => [
  {
    ColumnId: 340257,
    Value: email
  }
];

export const generateDtColumnMappings = (email, feedback) => [
  {
    "ws:ColumnId": 340258,
    "ws:Value": email
  },
  {
    "ws:ColumnId": 340259,
    "ws:Value": feedback
  }
];

export const generateRecords = columnMappings =>
  columnMappings.reduce(
    (memo, item) => [
      ...memo,
      {
        "ws:ColumnMappings": item,
        "ws:Subscriptions": [],
        "ws:isGloballyUnsubscribed": false
      }
    ],
    []
  );

export const generateDataImport = (columnMappings, tableId) => ({
  "ws:DataImporter": {
    "ws:dataImport": {
      "ws:Records": generateRecords(columnMappings),
      "ws:Type": "Insert",
      "ws:ClientTableId": tableId,
      "ws:TriggeredDispatches": []
    }
  }
});
