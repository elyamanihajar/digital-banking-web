export interface AccountDetails {
  accountId:            string;
  balance:              number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountOperationDTOs: AccountOperationDTO[];
}

export interface AccountOperationDTO {
  id:            number;
  dateOperation: Date;
  amount:        number;
  type:          string;
  description:   string;
}
