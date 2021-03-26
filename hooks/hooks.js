'use strict';

var hooks = {
    afterEditorInput: function (htmlString, params, abe) {
        if(params.colorpicker != null) {
            htmlString = htmlString.replace(
                'form-control form-abe',
                'form-control form-abe jscolor'
            );
            htmlString = htmlString.replace(
                'glyphicon-font',
                'glyphicon-tint'
            );
        }

        return htmlString
    }
};

exports.default = hooks;
