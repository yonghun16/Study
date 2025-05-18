import useConfirm from '../Hooks/useConfirm'

function UseConfirm() {
  const deleteWorld = () => console.log('Deleted the world');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);

  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

export default UseConfirm
