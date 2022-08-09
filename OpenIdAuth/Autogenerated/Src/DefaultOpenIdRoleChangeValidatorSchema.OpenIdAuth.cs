﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DefaultOpenIdRoleChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdRoleChangeValidatorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdRoleChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdRoleChangeValidatorSchema(DefaultOpenIdRoleChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4fcf7fa3-9797-433e-9321-4ff8f0106b2b");
			Name = "DefaultOpenIdRoleChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5daf09f1-167a-4d95-90ab-547ed370e530");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,84,219,78,227,48,16,125,46,18,255,224,150,151,84,170,242,1,116,119,37,154,82,148,7,96,181,5,94,16,90,185,201,164,181,148,216,145,47,72,17,234,191,239,248,146,182,9,45,93,222,98,103,230,156,51,103,102,204,105,5,170,166,25,144,39,144,146,42,81,232,56,17,188,96,107,35,169,102,130,199,143,53,240,52,191,49,122,115,121,241,113,121,49,48,138,241,53,89,54,74,67,53,221,157,15,179,37,156,186,143,111,185,102,154,129,58,25,176,160,153,22,210,71,96,204,149,132,53,138,32,73,73,149,186,38,115,40,168,41,181,151,244,71,148,144,108,40,95,195,11,45,89,78,49,207,229,188,134,168,25,227,57,50,68,186,169,65,20,81,122,50,107,60,126,195,180,218,172,74,150,145,204,50,157,37,34,215,228,52,30,130,89,163,118,226,239,65,111,68,142,242,127,75,246,78,53,56,149,131,218,31,136,179,164,33,119,160,253,87,244,172,64,98,11,56,100,214,127,98,58,199,9,81,90,90,223,192,5,63,96,251,198,196,177,13,222,169,36,42,219,64,69,201,207,94,150,247,189,89,186,191,247,148,211,53,200,24,25,83,174,52,229,25,204,28,80,116,128,57,117,144,18,180,145,60,160,198,137,4,20,28,84,118,9,124,252,182,91,217,74,136,146,164,202,214,179,144,162,242,126,157,43,239,206,176,220,93,166,121,91,88,38,80,102,91,183,112,40,75,179,74,68,105,42,110,197,98,185,35,7,62,199,235,209,116,111,70,163,110,242,138,241,103,206,52,198,236,29,238,115,142,150,7,145,163,80,187,231,123,125,35,127,51,199,164,158,196,2,116,182,65,164,143,163,42,182,62,143,21,36,58,100,142,93,150,53,96,62,235,254,240,237,136,113,42,42,42,27,143,20,91,168,73,48,96,210,231,30,183,150,12,250,110,160,170,14,54,22,251,132,115,159,123,84,28,77,3,63,124,206,175,232,136,248,80,115,219,240,161,15,141,83,245,96,202,242,81,222,86,53,218,182,203,11,209,219,195,25,41,104,169,224,139,41,176,123,242,205,41,144,152,178,159,130,182,163,101,101,161,206,247,211,199,181,221,108,187,226,111,59,61,25,185,184,73,160,115,222,207,153,170,75,218,56,219,112,111,93,109,123,239,67,197,90,26,248,31,35,174,128,231,254,37,8,231,79,207,130,123,121,130,107,254,21,114,166,37,148,251,151,197,154,149,114,43,243,27,219,115,212,68,135,203,122,43,137,94,126,218,210,62,112,216,200,189,153,195,62,202,57,123,2,117,119,14,28,117,111,52,250,212,161,130,206,139,52,236,3,125,97,184,191,237,94,110,201,63,165,95,121,53,249,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4fcf7fa3-9797-433e-9321-4ff8f0106b2b"));
		}

		#endregion

	}

	#endregion

}

