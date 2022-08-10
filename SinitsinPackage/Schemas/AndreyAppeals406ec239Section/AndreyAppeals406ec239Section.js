define("AndreyAppeals406ec239Section", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "AndreyAppeals",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		methods: {
			onPageClick: function() {
					ProcessModuleUtilities.executeProcess({sysProcessName: "AndreyProcessControlFillAppealService"});
			}
		},

		diff: /**SCHEMA_DIFF*/[
		{
			"operation": "insert",
			"parentName": "ActionButtonsContainer",
			"propertyName": "items",
			"name": "NewButton",
			"values": {
			"itemType": Terrasoft.ViewItemType.BUTTON,
			"caption": {bindTo: "Resources.Strings.NewButtonCaption"},
			"click": {bindTo: "onPageClick"},
			"style": Terrasoft.controls.ButtonEnums.style.BLUE
			}
		}
		]/**SCHEMA_DIFF*/,

	};
});