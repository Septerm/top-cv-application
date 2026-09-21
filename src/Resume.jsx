import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const createStyles = (accentColor) =>
  StyleSheet.create({
    page: {
      paddingTop: 36,
      paddingBottom: 36,
      paddingLeft: 40,
      paddingRight: 40,
      fontFamily: "Helvetica",
      fontSize: 10,
      color: "#000000",
      backgroundColor: "#FFFFFF",
    },
    // Header Section
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16,
    },
    name: {
      fontSize: 22,
      fontFamily: "Helvetica-Bold",
      color: accentColor,
    },
    address: {

      alignItems: "flex-end",
      textAlign: "right",
      fontSize: 9,
      lineHeight: 1.3,
    },
    // General Sections
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 14,
      fontFamily: "Helvetica-Bold",
      color: accentColor,
      borderBottomWidth: 1,
      borderBottomColor: "#000000",
      borderBottomStyle: "solid",
      paddingBottom: 3,
      marginBottom: 10,
    },
    summaryText: {
      lineHeight: 1,
    },
    // Skills 
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    skillItem: {
      width: "33.33%",
      marginBottom: 4,
      fontSize: 9,
    },
    // Work History
    workBlock: {
      marginBottom: 10,
    },
    jobHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 4,
    },
    jobTitle: {
      fontFamily: "Helvetica-Bold",
      color: accentColor,
    },
    jobCompany: {
      fontFamily: "Helvetica",
    },
    dateRange: {
      fontSize: 9,
      
    },
    workDescription: {
      lineHeight: 1,
    },
    // Education
    educationBlock: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    degree: {
      fontFamily: "Helvetica-Bold",
      color: accentColor,
    },
  });

export default function Resume({ data,  paint = "rgb(202, 112, 28)" }) {
  const styles = createStyles(paint);




  return (
    <Document author={data.name || "Garion Charles"}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.address}>
            <Text>{data.location}</Text>
            <Text>{data.email}</Text>
            <Text>{data.phone}</Text>
          </View>
        </View>

        {/* Summary */}
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.summaryText}>{data.summary}</Text>
          </View>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((item, index) => (
                <Text key={index} style={styles.skillItem}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Work History */}
        {data.work && data.work.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work History</Text>
            {data.work.map((item, index) => (
              <View key={index} style={styles.workBlock}>
                <View style={styles.jobHeader}>
                  <Text style={{marginBottom:"5"}}>
                    <Text style={styles.jobTitle}>{item.job}</Text>
                    <Text style={styles.jobCompany}>, {item.company}</Text>
                  </Text>
                  <Text style={styles.dateRange}>
                    ({item.workStart} - {item.workEnd || "Present"})
                  </Text>
                </View>
                <Text style={styles.workDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.educationBlock}>
                <Text>
                  <Text style={styles.degree}>{edu.degree}</Text>, {edu.school}
                </Text>
                <Text style={styles.dateRange}>
                  {edu.start} - {edu.end || "In Progress"}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}