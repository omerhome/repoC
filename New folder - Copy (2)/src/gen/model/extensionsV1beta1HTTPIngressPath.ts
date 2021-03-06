/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ExtensionsV1beta1IngressBackend } from './extensionsV1beta1IngressBackend';

/**
* HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.
*/
export class ExtensionsV1beta1HTTPIngressPath {
    'backend': ExtensionsV1beta1IngressBackend;
    /**
    * Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a \'/\'. When unspecified, all paths from incoming requests are matched.
    */
    'path'?: string;
    /**
    * PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by \'/\'. Matching is   done on a path element by element basis. A path element refers is the   list of labels in the path split by the \'/\' separator. A request is a   match for path p if every p is an element-wise prefix of p of the   request path. Note that if the last element of the path is a substring   of the last element in request path, it is not a match (e.g. /foo/bar   matches /foo/bar/baz, but does not match /foo/barbaz). * ImplementationSpecific: Interpretation of the Path matching is up to   the IngressClass. Implementations can treat this as a separate PathType   or treat it identically to Prefix or Exact path types. Implementations are required to support all path types. Defaults to ImplementationSpecific.
    */
    'pathType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backend",
            "baseName": "backend",
            "type": "ExtensionsV1beta1IngressBackend"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "pathType",
            "baseName": "pathType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1HTTPIngressPath.attributeTypeMap;
    }
}

