
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/x2js/xml2json.d.ts" />

module client {

interface AjaxOptions {
    accepts?: any;
    async?: boolean;
    beforeSend? (jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any;
    cache?: boolean;
    complete? (jqXHR: JQueryXHR, textStatus: string): any;
    contents?: { [key: string]: any; };
    contentType?: any;
    context?: any;
    converters?: { [key: string]: any; };
    crossDomain?: boolean;
    dataFilter? (data: any, ty: any): any;
    error? (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): any;
    global?: boolean;
    headers?: { [key: string]: any; };
    ifModified?: boolean;
    isLocal?: boolean;
    jsonp?: any;
    jsonpCallback?: any;
    mimeType?: string;
    password?: string;
    processData?: boolean;
    scriptCharset?: string;
    statusCode?: { [key: string]: any; };
    timeout?: number;
    traditional?: boolean;
    type?: string;
    username?: string;
    xhr?: any;
    xhrFields?: { [key: string]: any; };
}

export interface Result {
  value: number;
}

export var baseUri = 'http://localhost:8080/wadl2ts-example/rest/';
export var x2js = new X2JS();
export module calculator {
  export module add {
    export function get(arg1: number, arg2: number, callback: (response: Result) => void, options: AjaxOptions = {}): void {
      var settings = <JQueryAjaxSettings>options;
      settings.dataType = 'xml';
      settings.type = 'GET';
      settings.url = baseUri + 'calculator/add';
      settings.data = {arg1: arg1, arg2: arg2, };
      settings.success = (res: any)=>{callback(<Result>((<any>x2js.xml2json(res)).result));};
      $.ajax(settings);
    }
  }
}


}
