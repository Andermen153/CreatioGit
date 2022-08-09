define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"AndreySchemaea8eb6e3Detail27f40da8": {
				"schemaName": "AndreySchemaea8eb6e3Detail",
				"entitySchemaName": "AndreyAppeals",
				"filter": {
					"detailColumn": "AndreyAppealsAuthor",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Tabc111155eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc111155eTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AndreySchemaea8eb6e3Detail27f40da8",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabc111155eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "RelationshipTabContainer",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "JobTabContainer",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "EngagementTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 8
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
