Modal dialog with overlay, title bar, close button and footer slot.

```jsx
<Dialog open={open} title="Confirm deployment" onClose={close}
  footer={<><Button variant="outline" onClick={close}>Cancel</Button><Button>Deploy</Button></>}>
  Push MEA v2.4 to 42 edge nodes?
</Dialog>
```
