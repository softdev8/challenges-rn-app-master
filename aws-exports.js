// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
    'aws_app_analytics': 'enable',
    'aws_auth_facebook': 'enable',
    'aws_cloud_logic': 'enable',
    'aws_cloud_logic_custom': [{"id":"2gnhnocso9","name":"blockedUsersCRUD","description":"","endpoint":"https://2gnhnocso9.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/blockedUsers","/blockedUsers/123"]},{"id":"r93dhyq1eg","name":"videosCRUD","description":"","endpoint":"https://r93dhyq1eg.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/videos","/videos/123"]},{"id":"4u2x9c9yui","name":"payoutRequestsCRUD","description":"","endpoint":"https://4u2x9c9yui.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/payoutRequests","/payoutRequests/123"]},{"id":"rj21kms0j4","name":"FollowersCRUD","description":"","endpoint":"https://rj21kms0j4.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/Followers","/Followers/123"]},{"id":"mcwncerv55","name":"likesCRUD","description":"","endpoint":"https://mcwncerv55.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/likes","/likes/123"]},{"id":"vwz3t4lpil","name":"adsCRUD","description":"","endpoint":"https://vwz3t4lpil.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/ads","/ads/123"]},{"id":"tx4dwjl58i","name":"reportsCRUD","description":"","endpoint":"https://tx4dwjl58i.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/reports","/reports/123"]},{"id":"5epyk8ixs3","name":"blockedVideosCRUD","description":"","endpoint":"https://5epyk8ixs3.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/blockedVideos","/blockedVideos/123"]},{"id":"lfau9vvmje","name":"commentsCRUD","description":"","endpoint":"https://lfau9vvmje.execute-api.us-west-1.amazonaws.com/Development","region":"us-west-1","paths":["/comments","/comments/123"]}],
    'aws_cognito_identity_pool_id': 'us-west-2:5137870e-e17b-4fd9-8680-1105ff35f930',
    'aws_cognito_region': 'us-west-2',
    'aws_content_delivery': 'enable',
    'aws_content_delivery_bucket': 'challengesapp-hosting-mobilehub-1228559550',
    'aws_content_delivery_bucket_region': 'us-west-1',
    'aws_content_delivery_cloudfront': 'enable',
    'aws_content_delivery_cloudfront_domain': 'd3o1470rnuiftw.cloudfront.net',
    'aws_dynamodb': 'enable',
    'aws_dynamodb_all_tables_region': 'us-west-1',
    'aws_dynamodb_table_schemas': [{"tableName":"challengesapp-mobilehub-1228559550-comments","attributes":[{"name":"userId","type":"S"},{"name":"creationDate","type":"N"},{"name":"avatar","type":"S"},{"name":"challengeId","type":"S"},{"name":"displayName","type":"S"},{"name":"message","type":"S"},{"name":"username","type":"S"}],"indexes":[{"indexName":"challengeId-creationDate","hashKey":"challengeId","rangeKey":"creationDate"}],"region":"us-west-1","hashKey":"userId","rangeKey":"creationDate"},{"tableName":"challengesapp-mobilehub-1228559550-reports","attributes":[{"name":"userId","type":"S"},{"name":"itemId","type":"S"},{"name":"itemType","type":"S"},{"name":"reason","type":"S"},{"name":"reportDate","type":"S"}],"indexes":[],"region":"us-west-1","hashKey":"userId"},{"tableName":"challengesapp-mobilehub-1228559550-likes","attributes":[{"name":"userId","type":"S"},{"name":"challengeId","type":"S"}],"indexes":[],"region":"us-west-1","hashKey":"userId","rangeKey":"challengeId"},{"tableName":"challengesapp-mobilehub-1228559550-videos","attributes":[{"name":"userId","type":"S"},{"name":"challengeId","type":"S"},{"name":"approved","type":"BOOL"},{"name":"author","type":"S"},{"name":"authorSub","type":"S"},{"name":"category","type":"S"},{"name":"comments","type":"N"},{"name":"completed","type":"BOOL"},{"name":"creationDate","type":"N"},{"name":"deadlineDate","type":"N"},{"name":"description","type":"S"},{"name":"parent","type":"S"},{"name":"participants","type":"N"},{"name":"payment","type":"N"},{"name":"prizeDescription","type":"S"},{"name":"prizeImage","type":"S"},{"name":"prizeTitle","type":"S"},{"name":"prizeUrl","type":"S"},{"name":"rating","type":"N"},{"name":"title","type":"S"},{"name":"userThumb","type":"S"},{"name":"videoFile","type":"S"},{"name":"videoThumb","type":"S"},{"name":"views","type":"N"}],"indexes":[{"indexName":"User","hashKey":"authorSub","rangeKey":"rating"},{"indexName":"Categories","hashKey":"category","rangeKey":"creationDate"},{"indexName":"Hot","hashKey":"rating","rangeKey":"creationDate"},{"indexName":"UUID","hashKey":"challengeId"}],"region":"us-west-1","hashKey":"userId","rangeKey":"challengeId"},{"tableName":"challengesapp-mobilehub-1228559550-Followers","attributes":[{"name":"userId","type":"S"},{"name":"followers","type":"SS"},{"name":"following","type":"SS"}],"indexes":[],"region":"us-west-1","hashKey":"userId"},{"tableName":"challengesapp-mobilehub-1228559550-blockedVideos","attributes":[{"name":"userId","type":"S"},{"name":"challengeId","type":"S"}],"indexes":[],"region":"us-west-1","hashKey":"userId"},{"tableName":"challengesapp-mobilehub-1228559550-ads","attributes":[{"name":"id","type":"S"},{"name":"resource","type":"S"},{"name":"viewsnumber","type":"N"}],"indexes":[],"region":"us-west-1","hashKey":"id"},{"tableName":"challengesapp-mobilehub-1228559550-blockedUsers","attributes":[{"name":"userId","type":"S"},{"name":"blockedSub","type":"S"},{"name":"userSub","type":"S"}],"indexes":[],"region":"us-west-1","hashKey":"userId"},{"tableName":"challengesapp-mobilehub-1228559550-payoutRequests","attributes":[{"name":"userId","type":"S"},{"name":"submissionDate","type":"N"},{"name":"address","type":"S"},{"name":"address_add","type":"S"},{"name":"approveDate","type":"N"},{"name":"country","type":"S"},{"name":"currentBalance","type":"N"},{"name":"declineDate","type":"N"},{"name":"declined","type":"BOOL"},{"name":"email","type":"S"},{"name":"firstName","type":"S"},{"name":"isPrivate","type":"BOOL"},{"name":"lastName","type":"S"},{"name":"paypal","type":"S"},{"name":"sent","type":"BOOL"},{"name":"sub","type":"S"},{"name":"username","type":"S"}],"indexes":[],"region":"us-west-1","hashKey":"userId","rangeKey":"submissionDate"}],
    'aws_facebook_app_id': '708137699550743',
    'aws_facebook_app_permissions': 'public_profile',
    'aws_mobile_analytics_app_id': 'b49d4d5e7b364ec6bd034bf6796c829b',
    'aws_mobile_analytics_app_region': 'us-east-1',
    'aws_project_id': '1b286632-88b5-4321-8c69-fa9e56dc59aa',
    'aws_project_name': 'challenges-app',
    'aws_project_region': 'us-west-1',
    'aws_push_apns': 'enable',
    'aws_push_pinpoint': 'enable',
    'aws_resource_bucket_name': 'challengesapp-deployments-mobilehub-1228559550',
    'aws_resource_name_prefix': 'challengesapp-mobilehub-1228559550',
    'aws_sign_in_enabled': 'enable',
    'aws_user_files': 'enable',
    'aws_user_files_s3_bucket': 'challengesapp-userfiles-mobilehub-1228559550',
    'aws_user_files_s3_bucket_region': 'us-west-1',
    'aws_user_pools': 'enable',
    'aws_user_pools_id': 'us-west-2_YwLbWMH0r',
    'aws_user_pools_mfa_type': 'OFF',
    'aws_user_pools_web_client_id': '6ig5invve2v8brr1467i8smjl2',
}

export default awsmobile;