define("AndreyAppeals1Page", [], function() {
	return {
		entitySchemaName: "AndreyAppeals",
		attributes: {
			"AndreyAppealsService":{
				"dataValueType": Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig":{
					"filters": [
						function(){
							 var IdCategoryService = this.get("AndreyAppealsServicesCategory"); 
							 var filterGroup = Ext.create("Terrasoft.FilterGroup"); 
							 if (IdCategoryService){ 
								filterGroup.add("IsActiveService", 
									Terrasoft.createColumnFilterWithParameter( 
										Terrasoft.ComparisonType.EQUAL, 
										"[AndreyServices:Id].AndreyServicesCategory", 
										IdCategoryService.value)); 
								return filterGroup;} 

							return filterGroup; 
						}
					]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "AndreyAppealsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AndreyAppeals"
				}
			},
			"AndreySchema16643664Detail001fe195": {
				"schemaName": "AndreySchema16643664Detail",
				"entitySchemaName": "AndreyDetailTimes",
				"filter": {
					"detailColumn": "AndreyAndreyAppeals",
					"masterColumn": "Id"
				}
			},
			"AndreySchema86ae7ea1Detail79132fd5": {
				"schemaName": "AndreySchema86ae7ea1Detail",
				"entitySchemaName": "AndreyDetailAppealTickets",
				"filter": {
					"detailColumn": "AndreyAndreyAppeals",
					"masterColumn": "Id"
				}
			},
			"VisaDetailV22d056181": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "AndreyAppealsVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "AndreyAppeals"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"AndreyAppealsService": {
				"6be43898-6058-4c28-945c-68764fafd9cf": {
					"uId": "6be43898-6058-4c28-945c-68764fafd9cf",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "AndreyServicesCondition",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "b940acce-9564-4918-8417-0cd6d28f57f1",
					"dataValueType": 10
				},
				"2fd3cd73-8012-49a8-b6b2-2142b71fb0e6": {
					"uId": "2fd3cd73-8012-49a8-b6b2-2142b71fb0e6",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "AndreyAppealsCondition"
							},
							"rightExpression": {
								"type": 0,
								"value": "bf140922-3c5b-44ff-8d4b-28eb06e9bfc8",
								"dataValueType": 10
							}
						}
					]
				},
				"5ef64593-9b7f-495a-afc8-3630a175b5e2": {
					"uId": "5ef64593-9b7f-495a-afc8-3630a175b5e2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AndreyAppealsServicesCategory"
							}
						}
					]
				}
			},
			"AndreyAppealsComment": {
				"b775038c-84c4-4a83-9996-3c1b4d53b149": {
					"uId": "b775038c-84c4-4a83-9996-3c1b4d53b149",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AndreyAppealsService"
							}
						}
					]
				}
			},
			"AndreyAppealsResponsible": {
				"9a572232-ebd1-434b-a0aa-237fa05af731": {
					"uId": "9a572232-ebd1-434b-a0aa-237fa05af731",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				},
				"e830fc8e-6dcc-44d4-8f69-c67b6956d454": {
					"uId": "e830fc8e-6dcc-44d4-8f69-c67b6956d454",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "AndreyAppealsCondition"
							},
							"rightExpression": {
								"type": 0,
								"value": "b244ca7f-4107-4248-b450-ae0d23b4599e",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"AndreyAppealsStringService": {
				"2d9f5d15-ad22-4340-ad91-0a46ad232ac4": {
					"uId": "2d9f5d15-ad22-4340-ad91-0a46ad232ac4",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "AndreyAppealsService",
							"attributePath": "AndreyName"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "AndreyAppealsService"
							}
						}
					]
				}
			},
			"CreatedOn": {
				"d98e5ac1-06ab-490e-a366-1167a8256541": {
					"uId": "d98e5ac1-06ab-490e-a366-1167a8256541",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "INTEGERf7753479-d4d5-47ec-86aa-204ceb92622b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AndreyAppealsTotalSum",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGERf9ffc2c3-f4dd-4188-9b94-0caf948865a3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AndreyAppealsExpensiveTicket",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGERa9a073fa-6905-46e6-9bc2-eb29bf8d4ef1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AndreyAppealsAveragePrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AndreyAppealsServicesCategory703a3e11-16b9-4ed8-afb8-52132af16dba",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "AndreyAppealsServicesCategory"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "INTEGERa58344ad-62c3-44ae-a036-f735045a36d1",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsNumber",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING857db7f8-a620-4a8e-befb-bd4717f741a2",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsTheme",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPf66c4d3a-eff0-4629-a2aa-17827ca6d4bc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsApplicant",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPe5e17fe7-0fe9-49af-97c9-305d261c638f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsAuthor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPb62bba57-9560-44a9-ac0a-fe9f63317ffa",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsCondition",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPc8ddc151-019b-4ef6-8a94-f85f9839019e",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsResponsible",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP6cf84f79-7b0c-412b-8001-1c5bcc73b2ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsService",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING60f275a4-c7a1-42cb-8486-410cf3e3b1d6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "AndreyAppealsComment",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndreySchema16643664Detail001fe195",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AndreySchema86ae7ea1Detail79132fd5",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "AndreyNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "insert",
				"name": "Tab4cb0c558TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "VisaDetailV22d056181",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab4cb0c558TabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
