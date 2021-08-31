function AllData(){
  const ctx = React.useContext(UserContext);
return (
  <Card
    bgcolor="secondary"
    header="All Data in Store"
    status={status}
    body={JSON.stringify(ctx)}
      />
)
}