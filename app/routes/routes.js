//see flowRouter's documentation
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {
            content: "home",
            dialog: queryParams.dialog,
        });
    }
});

FlowRouter.route('/page2', {
    action: function(params, queryParams) {
        BlazeLayout.render("mainLayout", {
            content: "page2",
        });
    }
});
