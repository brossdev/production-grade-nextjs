export default (req, res: NextApiResponse) => {
    res.clearPreviewData()
    res.end('preview mode disabled')
}
