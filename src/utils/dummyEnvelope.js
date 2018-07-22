export default `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws.communicatorcorp.com/">
        <soap:Header>
          <ws:CommunicatorCredentials>
            <!--Optional:--><!--Optional:-->
         <ws:Username>?</ws:Username>
         <!--Optional:-->
        <ws:Password>?</ws:Password>
      </ws:CommunicatorCredentials>
   </soap:Header>
        <soap:Body>
          <ws:DataImporter>
         <!--Optional:-->
         <ws:dataImport>
            <ws:ClientTableId>?</ws:ClientTableId>
            <!--Optional:-->
        <ws:TriggeredDispatches>
          <!--Zero or more repetitions:-->
               <ws:TriggeredDispatch>
                  <ws:DispatchId>?</ws:DispatchId>
        <ws:TriggeredDispatchMethod>?</ws:TriggeredDispatchMethod>
               </ws:TriggeredDispatch>
            </ws:TriggeredDispatches>
            <!--Optional:-->
        <ws:Type>Insert</ws:Type>
            <!--Optional:-->
        <ws:FormatDate>dd/MM/yyyy</ws:FormatDate>
            <!--Optional:-->
        <ws:Records>
          <!--Zero or more repetitions:-->
               <ws:DataRecord>
                  <!--Optional:-->
                  <ws:ColumnMappings>
                     <!--Zero or more repetitions:-->
                     <ws:ColumnMapping>
                        <ws:ColumnId>?</ws:ColumnId>
                        <!--Optional:-->
        <ws:Value>?</ws:Value>
                     </ws:ColumnMapping>
                  </ws:ColumnMappings>
                  <!--Optional:-->
        <ws:Subscriptions>
          <!--Zero or more repetitions:-->
                     <ws:Subscription>
                        <ws:MailingListId>?</ws:MailingListId>
        <ws:Subscribed>?</ws:Subscribed>
                        <!--Optional:-->
        <ws:HonourExistingUnsubscribes>true</ws:HonourExistingUnsubscribes>
                     </ws:Subscription>
                  </ws:Subscriptions>
        <ws:IsGloballyUnsubscribed>?</ws:IsGloballyUnsubscribed>
               </ws:DataRecord>
            </ws:Records>
         </ws:dataImport>
      </ws:DataImporter>
   </soap:Body>
</soap:Envelope>`;
