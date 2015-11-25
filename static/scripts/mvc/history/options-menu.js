define(["mvc/ui/popup-menu","mvc/base-mvc","utils/localization"],function(a,b,c){function d(a,b,c){return _.clone(e).filter(function(d){return a&&!d.anon?!1:!b&&d.purge?!1:(d.href&&(d.href=c+d.href,d.target="galaxy_main"),d.confirm&&(d.func=function(){confirm(d.confirm)&&(galaxy_main.location=d.href)}),!0)})}var e=[{html:c("History Lists"),header:!0},{html:c("Saved Histories"),href:"history/list"},{html:c("Histories Shared with Me"),href:"history/list_shared"},{html:c("History Actions"),header:!0,anon:!0},{html:c("Create New"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.createNewHistory()}},{html:c("Copy History"),href:"history/copy"},{html:c("Share or Publish"),href:"history/sharing"},{html:c("Show Structure"),href:"history/display_structured",anon:!0},{html:c("Extract Workflow"),href:"workflow/build_from_current_history"},{html:c("Delete"),confirm:c("Really delete the current history?"),href:"history/delete_current"},{html:c("Delete Permanently"),confirm:c("Really delete the current history permanently? This cannot be undone."),href:"history/delete_current?purge=True",purge:!0,anon:!0},{html:c("Dataset Actions"),header:!0,anon:!0},{html:c("Copy Datasets"),href:"dataset/copy_datasets"},{html:c("Dataset Security"),href:"root/history_set_default_permissions"},{html:c("Resume Paused Jobs"),href:"history/resume_paused_jobs?current=True",anon:!0},{html:c("Collapse Expanded Datasets"),func:function(){Galaxy&&Galaxy.currHistoryPanel&&Galaxy.currHistoryPanel.collapseAll()}},{html:c("Unhide Hidden Datasets"),anon:!0,func:function(){if(Galaxy&&Galaxy.currHistoryPanel&&confirm(c("Really unhide all hidden datasets?"))){var a=Galaxy.currHistoryPanel.model.contents.hidden();a.ajaxQueue(Backbone.Model.prototype.save,{visible:!0}).done(function(){Galaxy.currHistoryPanel.renderItems()}).fail(function(){alert("There was an error unhiding the datasets"),console.error(arguments)})}}},{html:c("Delete Hidden Datasets"),anon:!0,func:function(){if(Galaxy&&Galaxy.currHistoryPanel&&confirm(c("Really delete all hidden datasets?"))){var a=Galaxy.currHistoryPanel.model.contents.hidden();a.ajaxQueue(Backbone.Model.prototype.save,{deleted:!0,visible:!0}).done(function(){Galaxy.currHistoryPanel.renderItems()}).fail(function(){alert("There was an error deleting the datasets"),console.error(arguments)})}}},{html:c("Purge Deleted Datasets"),confirm:c("Really delete all deleted datasets permanently? This cannot be undone."),href:"history/purge_deleted_datasets",purge:!0,anon:!0},{html:c("Downloads"),header:!0},{html:c("Export Tool Citations"),href:"history/citations",anon:!0},{html:c("Export History to File"),href:"history/export_archive?preview=True",anon:!0},{html:c("Other Actions"),header:!0},{html:c("Import from File"),href:"history/import_archive"}],f=function(b,c){c=c||{};var e=void 0===c.anonymous?!0:c.anonymous,f=c.purgeAllowed||!1,g=c.root||(Galaxy&&Galaxy.options?Galaxy.options.root:"/"),h=d(e,f,g);return console.debug("menu:",h),new a(b,h)};return f});
//# sourceMappingURL=../../../maps/mvc/history/options-menu.js.map