import React, { useContext } from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { rootStoreContext } from '../../Stores/rootStore'
import { Left } from 'react-bootstrap/lib/Media'

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: "90vh",
        width: "80vw",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:  'flex-start'
    },
    headerContainer: {
        fontSize: '18pt',
        fontWeight: "semibold",
        marginTop: "20pt",
        marginBottom: "20pt",
    },
    subHeader: {
        fontSize: "16pt",
        fontWeight: "bold",
        marginTop: "15pt",
    },
    lastSubHeader: {
        fontSize: "16pt",
        fontWeight: "bold",
        marginTop: "auto",
    },
    textContainer: {
        marginVertical:"1mm",
        fontSize: "14pt",
        lineHeight:"0.5mm"
    },
    personInfoContainer:
    {
        fontSize: "11pt",
        marginVertical: '1pt',
    },
    greeting: 
    {
        marginTop: "20pt",
        fontSize: '12pt',
        fontStyle: 'italic'
    },
    cvHead: {
        marginTop: "3pt",
        fontSize: "14pt"
    },
    cvSmallText: {
        fontSize: "12pt"
    },
    cvMiscText: {
        paddingVertical: "2pt",
        fontSize: "12pt"

    }

})


const CvPdf = () => {

    const rootStore = useContext(rootStoreContext);
    const { Letter, CvData, personData, projectData, languageData } = rootStore.dataStore;

    return (
        <Document 
            title="Jobbsøknad"
            author="CV-Applikasjon"
            subject="Jobbsøknad og CV">

            {/* Søknadsbrev */}
            <Page size="A4" style={styles.page}>
                <View style={styles.content}>

                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.name} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.adress1} </Text>
                        <Text> {personData?.contactInfo.adress2} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.phonenumer} </Text>
                        <Text> {personData?.contactInfo.email} </Text>
                    </View>


                    <View style={styles.headerContainer}>
                        <Text> {Letter?.title} </Text>
                    </View>

                    {Letter?.content.map(x => (
                        <View style={styles.textContainer}>
                            <Text> {x} </Text>
                        </View>

                    ))}

                    <View style={styles.greeting}>
                        <Text> {Letter?.greeting} </Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text> {Letter?.signature} </Text>
                    </View>

                </View>
            </Page>
        
            {/* CV arbeid og utdanning */}
            <Page size="A4" style={styles.page}>
                <View style={styles.content}>

                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.name} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.adress1} </Text>
                        <Text> {personData?.contactInfo.adress2} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.phonenumer} </Text>
                        <Text> {personData?.contactInfo.email} </Text>
                    </View>

                    {/* Jobb */}
                    <View style={styles.subHeader}>
                        <Text> {CvData?.job.title} </Text>
                    </View>
                    {CvData?.job.jobs.map(x => (
                        <View>
                            <View>
                                <Text style={styles.cvHead}> {x.yearSpan} : {x.employer} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> {x.comment} </Text>
                            </View>
                        </View>
                    ))}

                    {/* Utdanning */}
                    <View style={styles.subHeader}>
                        <Text> {CvData?.education.title} </Text>
                    </View>
                    {CvData?.education.educations.map(x => (
                        <View>

                            <View style={styles.cvHead}>
                                <Text> {x.yearSpan} : {x.school} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> {x.course} </Text>
                            </View>
                            {x.comment && (
                                <View style={styles.cvSmallText}>
                                    <Text> {x.comment} </Text>
                                </View>
                            )}

                        </View>
                    ))}

                    {/* Diverse */}
                    <View style={styles.subHeader}>
                        <Text> {CvData?.otherItems.title} </Text>
                    </View>
                    {CvData?.otherItems.other.map(x => (
                        <View style={styles.cvMiscText}>
                            <Text> {x.item} </Text>
                        </View>
                    ))}
                    

                    {/* Referanser */}
                    <View style={styles.lastSubHeader}>
                        <Text> {CvData?.references.title} </Text>
                    </View>

                    {CvData?.references.references.map(x => (
                        <View>
                            <View style={styles.cvHead}>
                                <Text> {x.name} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> {x.title} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> {x.phonenumber} / {x.email} </Text>
                            </View>
                        </View>
                    ))}

                </View>
            </Page>

            {/* Språk og prosjekter */}
            <Page size="A4" style={styles.page}>
                <View style={styles.content}>

                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.name} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.adress1} </Text>
                        <Text> {personData?.contactInfo.adress2} </Text>
                    </View>
                    <View style={styles.personInfoContainer}>
                        <Text> {personData?.contactInfo.phonenumer} </Text>
                        <Text> {personData?.contactInfo.email} </Text>
                    </View>
                    
                    {/* Språk */}
                    <View style={styles.subHeader}>
                        <Text> Språk </Text>
                    </View>
                    {languageData?.map(x => (
                        <View>
                            <View style={styles.cvHead}>
                                <Text> {x.name} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> Nivå: {x.level} </Text>
                                <Text> Sertifisert: {x.certified ? "Ja" : "Nei"} </Text>
                            </View>
                        </View>
                    ))}


                    {/* Prosjekter */}
                    <View style={styles.lastSubHeader}>
                        <Text> Prosjekter </Text>
                    </View>

                    {projectData?.map(x => (
                        <View>
                            <View style={styles.cvHead}>
                                <Text> {x.name} </Text>
                            </View>
                            <View style={styles.cvSmallText}>
                                <Text> Type: {x.type} </Text>
                                <Text> Språk / Frameworks: {x.languages} </Text>
                            </View>
                        </View>
                    ))}

                </View>
            </Page>

        </Document>
    )
}

export default CvPdf