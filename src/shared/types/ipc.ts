export interface IDocument {
  id: string;
  title: string;
  content?: string;
}

/**
 * Request
 */
export type SaveDocumentRequest = IDocument;

export interface FetchDocumentRequest {
  id: string;
}

export interface DeleteDocumentRequest {
  id: string;
}

/**
 * Response
 */
export interface FetchAllDocumentsResponse {
  data: IDocument[];
}

export interface FetchDocumentResponse {
  data: IDocument;
}

export interface CreateDocumentResponse {
  data: IDocument;
}
